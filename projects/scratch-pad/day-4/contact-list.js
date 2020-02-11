// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
       return {
           id: id,                      //creating an object that will return id, namefirst and namelast that user inputs
           nameFirst: nameFirst,
           nameLast:  nameLast,
       };
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];          //creating an array to store contact objects 
    
 
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        
        addContact: function (contact) {
            return contacts.push(contact); //creating a function to push the contact objects inside of contacts array
        },
        
        findContact: function (fullName){
            for(var i = 0; i < contacts.length; i++){       //for loop iterating through each element of contacts array 
                var name = contacts[i].nameFirst + ' ' + contacts[i].nameLast;  //the variable name is storing the values of namefirst and namelast 
                if(fullName === name){      //conditional statement compairing the input value of full name vs the name variable
                    return contacts[i];     //if full name is the same as the name variable then the object will be returned 
                }
            }
            return undefined;           //if the name is not in the contact object then the function will returne undefined
        },
        
        removeContact:function(contact){
            for(var i = 0; i < contacts.length; i++){   //for loop to iterate through all elements of array
                if(contact === contacts[i]){            //comapiring the 
                    return contacts.splice(i, 1);
                }
            }
        },
         printAllContactNames: function(){
             var contactName = '';
             for(var i = 0; i < contacts.length; i++){ //looping through array
                 var name = contacts[i].nameFirst + ' ' + contacts[i].nameLast; //variable to store array
                 if(i === contacts.length - 1){  //conditional statement is testing for the last index
                     contactName += name;        //adding and assigning value name to contactName only at last index
                     
                 }else{
                     contactName += name + '\n'; //adding and assigning value name to contactName and creating new line for every index but the last one
                 }
                 
            }
            return contactName; //returning variable with all names stored in it
        }
     };
       
        
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
