export function saveInDb(e, email, setEmail) {
  e.preventDefault();
  const getStorage = localStorage.getItem('emails');
  const emailArray = [];

  if(getStorage) {

    const emails = JSON.parse(getStorage);
    
    emails.push({ email:email });

    localStorage.setItem('emails', JSON.stringify(emails));
    setEmail('');
    return;
  } 

  emailArray.push({ email:email });
  localStorage.setItem('emails', JSON.stringify(emailArray));
  setEmail('');
};