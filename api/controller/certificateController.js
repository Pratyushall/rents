import prisma from "../lib/prisma.js";

// POST /api/certificates/upload
export const uploadCertificate = async (req, res) => {
  const { property_id, certificateName, documentURL } = req.body;
  try {
    const cert = await prisma.propertyCertificates.create({
      data: {
        ...(property_id && { property_id }),
        certificateName,
        documentURL,
      },
    });
    return res.status(201).json(cert);
  } catch (error) {
    console.error("CERT UPLOAD ERROR:", error);
    return res
      .status(500)
      .json({ message: "Failed to upload certificate", error: error.message });
  }
};

// GET /api/certificates/my
export const getMyCertificates = async (req, res) => {
  try {
    const userId = req.user.id;
    // your logic for fetching certificates...
    const certs = await prisma.propertyCertificates.findMany({
      where: {
        /* ... */
      },
    });
    res.json(certs);
  } catch (err) {
    console.error("GET MY CERTIFICATES ERROR:", err);
    res.status(500).json({ message: "Failed to fetch certificates" });
  }
};
