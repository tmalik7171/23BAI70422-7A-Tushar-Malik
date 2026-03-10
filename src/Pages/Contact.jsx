import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";

export default function Contact() {
  return (
    <div className="d-flex justify-content-center">
      {/* Centered container */}
      <div style={{ width: "100%", maxWidth: "600px" }}>
        <Typography variant="h4" gutterBottom align="center">
          📞 Contact Us
        </Typography>

        <Alert severity="info" className="mb-4">
          Feel free to reach out. We’ll get back to you soon!
        </Alert>

        <Stack spacing={3}>
          <TextField label="Full Name" fullWidth />
          <TextField label="Email Address" type="email" fullWidth />
          <TextField label="Phone Number" type="tel" fullWidth />
          <TextField label="Message" multiline rows={4} fullWidth />

          <Button variant="contained" size="large">
            Send Message
          </Button>
        </Stack>

        {/* Contact info */}
        <div className="mt-5 text-center">
          <Typography variant="h6">📍 Chandigarh, India</Typography>
          <Typography>📧 support@myproject.com</Typography>
          <Typography>📱 +91 98*** ***10</Typography>
        </div>
      </div>
    </div>
  );
}
