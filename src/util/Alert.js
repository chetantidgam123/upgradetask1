import Alert from '@mui/material/Alert';

 function successAlerts(msg) {
  return (
    <Alert severity="success" color="success">
      {msg}
    </Alert>
  );
}
 function errorAlerts(msg) {
  return (
    <Alert severity="error" color="error">
      {msg}
    </Alert>
  );
}

export {successAlerts,errorAlerts}