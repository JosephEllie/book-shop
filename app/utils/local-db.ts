// Read data from local storage
function readFromLocalStorage(key: string) {
    try {
        const item = localStorage.getItem(key);
        if (item) {
            return JSON.parse(item);
        }
        return null;
    } catch (error) {
        console.error(`Error reading from local storage: ${error}`);
        return null;
    }
}

// Write data to local storage
export function writeToLocalStorage(key: string, data: any) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error(`Error writing to local storage: ${error}`);
    }
}

// Create a new object and add it to the array
function createObjectInLocalStorage(key: string, newObject: any) {
    const existingData = readFromLocalStorage(key) || [];
    existingData.push(newObject);
    writeToLocalStorage(key, existingData);
}

// Read all objects from local storage
function readAllObjectsInLocalStorage(key: string) {
    return readFromLocalStorage(key) || [];
}

// Update an object in the array by its index
function updateObjectInLocalStorage(key: string, index: number, updatedObject: any) {
    const existingData = readFromLocalStorage(key) || [];
    if (index >= 0 && index < existingData.length) {
        existingData[index] = updatedObject;
        writeToLocalStorage(key, existingData);
    }
}

// Delete an object from the array by its index
function deleteObjectInLocalStorage(key: string, index: number) {
    const existingData = readFromLocalStorage(key) || [];
    if (index >= 0 && index < existingData.length) {
        existingData.splice(index, 1);
        writeToLocalStorage(key, existingData);
    }
}

// Example usage:

const key = "myData"; // Unique key for your data in local storage

// Create a new object and add it to local storage
const newObj = { name: "New Object", value: 42 };
createObjectInLocalStorage(key, newObj);

// Read all objects from local storage
const allObjects = readAllObjectsInLocalStorage(key);
console.log(allObjects);

// Update an object in the array by its index
const updatedObj = { name: "Updated Object", value: 99 };
updateObjectInLocalStorage(key, 0, updatedObj);

// Delete an object from the array by its index
deleteObjectInLocalStorage(key, 1);
