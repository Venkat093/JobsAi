import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';

const Profile = () => {
  return (
    <div style={{ padding: '16px' }}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            John Doe
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <strong>DOB:</strong> January 1, 1990
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <strong>Location:</strong> New York, USA
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <strong>Email:</strong> john.doe@example.com
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <strong>Phone:</strong> +1 234 567 8900
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
