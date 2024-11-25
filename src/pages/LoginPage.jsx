import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  Typography, 
  TextField, 
  Button, 
  Grid, 
  Container,
  Box
} from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SecurityIcon from '@mui/icons-material/Security';
import TranslateIcon from '@mui/icons-material/Translate';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import GavelIcon from '@mui/icons-material/Gavel';
import PublicIcon from '@mui/icons-material/Public';
import VerifiedIcon from '@mui/icons-material/Verified';

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "user" && password === "password123") {
      setError("");
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Login Card */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Login
              </Typography>
              <Box component="form" sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="Username"
                  margin="normal"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && (
                  <Typography color="error" sx={{ mt: 2 }}>
                    {error}
                  </Typography>
                )}
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleLogin}
                  sx={{ mt: 3 }}
                >
                  Login
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Feature Cards */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            {/* AI-Powered Solutions */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <SmartToyIcon color="primary" sx={{ fontSize: 40 }} />
                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    AI-Powered Solutions
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    • ML-based vendor matching for optimal choices
                    • GenAI chatbot for 24/7 support
                    • Smart contract generation for negotiations
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Secure & Transparent */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <SecurityIcon color="primary" sx={{ fontSize: 40 }} />
                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    Secure & Transparent
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    • Escrow-based smart contracts
                    • Blockchain tracking for deliveries
                    • Immutable record keeping
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Global Connectivity */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <TranslateIcon color="primary" sx={{ fontSize: 40 }} />
                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    Global Connectivity
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    • Real-time translation for chat
                    • Cross-border communication
                    • International vendor network
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Business Intelligence */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <QueryStatsIcon color="primary" sx={{ fontSize: 40 }} />
                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    Business Intelligence
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    • Free powerful analytics
                    • CarbonQuest environmental tracking
                    • Data-driven insights
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Gen AI Chatbot */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <SupportAgentIcon color="primary" sx={{ fontSize: 40 }} />
                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    Gen AI Chatbot Assistance
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    • Immediate support for your needs
                    • Personalized responses
                    • Efficient customer service
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Automated Negotiation Contracts */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <GavelIcon color="primary" sx={{ fontSize: 40 }} />
                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    Smart Contract Negotiations
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    • Generate contracts with AI
                    • Secure terms for both parties
                    • Automated, fair negotiation process
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Blockchain Tracking */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <VerifiedIcon color="primary" sx={{ fontSize: 40 }} />
                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    Blockchain Tracking
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    • Transparent and secure tracking
                    • Immutable delivery records
                    • Reliable, tamper-proof data
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Environmental Tracking */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <PublicIcon color="primary" sx={{ fontSize: 40 }} />
                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    CarbonQuest Tracking
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    • Track and offset carbon footprint
                    • Environmentally focused solutions
                    • Help SMBs go green
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LoginPage;
