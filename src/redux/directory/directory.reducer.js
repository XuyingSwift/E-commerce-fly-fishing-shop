const INITIAL_STATE = {
    sections: [{
        title: 'boots',
        imageUrl: 'https://i.ibb.co/z71tRMY/boots.jpg',
        id: 1,
        linkUrl: 'hats'
      },
      {
        title: 'waders',
        imageUrl: 'https://i.ibb.co/HTS5CwF/wader.jpg',
        id: 2,
        linkUrl: 'hats'
      },
      {
        title: 'fishing rods',
        imageUrl: 'https://i.ibb.co/Kj4tmKn/rod.jpg',
        id: 3,
        linkUrl: 'hats'
      },
      {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/X8PjzD0/women.jpg',
        size: 'large',
        id: 4,
        linkUrl: 'hats'
      },
      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/GJyY48x/man.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'hats'
      }
    ]
}

const directoryReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        default: 
            return state;
    }
};

export default directoryReducer;