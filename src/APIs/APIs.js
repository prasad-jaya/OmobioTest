import axios from 'axios';

export default axios.create({
    baseURL:'http://localhost/CRUD/cru/index.php',
    headers:  { 'Content-Type': 'application/x-www-form-urlencoded' },
       
});


