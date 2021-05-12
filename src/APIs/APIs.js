import axios from 'axios';

const Key = 'AIzaSyBMvcFhHvjBdK28o2kyJuca4Iztyc5vxHI';

export default axios.create({
    baseURL:'http://localhost/CRUD/cru/index.php',
    headers:  { 'Content-Type': 'application/x-www-form-urlencoded' },
       
});


