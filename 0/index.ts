
function walkDog() {
    // @ts-ignore
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            const dogWalked = true;
            if(dogWalked){
                resolve("You walk the dog 🐕");
            }
            else{
                reject("You didnt walked the dog");
            }

        },1500)
    })
}

function cleanKitchen() {

    // @ts-ignore
    return new Promise((resolve, reject) => {
        setTimeout(()=>{

            const kitchenCleaned = false;

            if(kitchenCleaned){
                resolve("You clean the kitchen");
            }
            else{
                reject("You didnt clean the kitchen");
            }

        },2500);
    });
}

function takeOutTrash() {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        setTimeout(()=>{

            const trashTakenOut = true;
            if(trashTakenOut){
                resolve("You Take out the trash");
            }
            else{
                reject("You dint take out the trash");
            }

        },500);
    })
}

// walkDog().then(value => { console.log(value) ; return cleanKitchen()})
//     .then(value => {console.log(value) ; return takeOutTrash()})
//     .then(value => {console.log(value) ; console.log("You finished all the chores")})
//     .catch(error => {
//         console.log(error);
//     });

// @ts-ignore
async function doEveryThing() {
    try{
        const walkDoResult = await walkDog();
        console.log(walkDoResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    }catch (error){
        console.error(error);
    }
}

doEveryThing();