import prisma from "../lib/prisma.js";

// Send a new message
export const sendMessage = async (req, res) => {
  const { receiver_id, message } = req.body;
  const sender_id = req.user.id;

  try {
    const newMessage = await prisma.messages.create({
      data: {
        sender_id,
        receiver_id,
        message,
      },
    });

    res.status(201).json(newMessage);
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ message: "Failed to send message" });
  }
};

// Get all messages between current user and another user
export const getMessagesWithUser = async (req, res) => {
  const { userId } = req.params;
  const currentUserId = req.user.id;

  try {
    const chat = await prisma.messages.findMany({
      where: {
        OR: [
          { sender_id: currentUserId, receiver_id: userId },
          { sender_id: userId, receiver_id: currentUserId },
        ],
      },
      orderBy: { sentAt: "asc" },
    });

    res.status(200).json(chat);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ message: "Failed to fetch messages" });
  }
};
