const adminForm = document.querySelector('.admin-actions');
adminForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const adminEmail = document.querySelector('#admin-email').value;
    const addAdminRole = functions.httpsCallable('addAdminRole');
    addAdminRole ({ email : adminEmail}).then(result =>{
     console.log(result);
    });
})
if(user){
    user.getIdTokenResult().then(idTokenResult =>{
     console.log(idTokenResult.claims.admin)
    })
    db.collection('guides').onSnapshot(snapshot =>{
        setupGuides(snapshot.docs);
        setupUI(user);
    }
}, err => {
    console.log(err.message)

});
} else {
    setupUI();
    setupGuides();
}
});
