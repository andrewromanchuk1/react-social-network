let initialNavbar = {
   friendsList: [
      {id: 0, name:'Andy', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-YkG5DuyGAhJ0eDLCPbC5MBOs9m5cXX8yA&usqp=CAU'},
      {id: 1, name:'Sara', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-YkG5DuyGAhJ0eDLCPbC5MBOs9m5cXX8yA&usqp=CAU'},
      {id: 2, name:'Peter', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-YkG5DuyGAhJ0eDLCPbC5MBOs9m5cXX8yA&usqp=CAU'},
   ]
}

const navbarReducer = (state = initialNavbar, action) => {
   return state
}

export default navbarReducer