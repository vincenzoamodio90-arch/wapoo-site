import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/contact", (req, res) => {
    const { name, email, phone, company, message } = req.body;
    
    console.log("Contact Form Submission:", { name, email, phone, company, message });
    
    // In a real application, you would use nodemailer or a similar service here.
    // Example:
    // const transporter = nodemailer.createTransport({...});
    // await transporter.sendMail({
    //   from: email,
    //   to: "info@wapoo.it",
    //   subject: `Nuovo contatto da ${name} (${company})`,
    //   text: message
    // });

    res.json({ 
      success: true, 
      message: "Grazie per averci contattato! Ti risponderemo al più presto." 
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
