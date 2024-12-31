import { addNewPetToStore, updatePetStatus, findPetsByStatus } from '../services'; 
import { Pet } from '../setup/types'
import { HTTP_STATUS_CODES } from '../setup/constants'

describe('pet', () => {
    it('verify add new pet to store then update its status', async () => {
        const  addNewPetToStoreResult = await addNewPetToStore({ petName: 'fish', status: 'available' });
        expect(addNewPetToStoreResult.status).toBe(HTTP_STATUS_CODES.OK); 
        const updatePetStatusResult = await updatePetStatus({ petName: 'fish', status: 'sold' });
        expect(updatePetStatusResult.status).toBe(HTTP_STATUS_CODES.OK); 
    });

    it('verify find a pet by status availble, then verify that the name of the fourth pet name is “Puff"', async () => {
        const findPetsByStatusResult = await findPetsByStatus({ status: "available" })
        expect(findPetsByStatusResult.status).toBe(HTTP_STATUS_CODES.OK); 
        const pets: Pet[] = findPetsByStatusResult.data
        expect(pets[3].name).toBe("Puff"); 
        console.log("list of pets with available status: "+JSON.stringify(pets))
    });

    it('verify find a pet by status sold, then verify all the items that returned in the response have sold status', async () => {
        const findPetsByStatusResult = await findPetsByStatus({ status: "sold" })
        expect(findPetsByStatusResult.status).toBe(HTTP_STATUS_CODES.OK);
        const pets: Pet[] = findPetsByStatusResult.data
        for (const pet of pets)
            expect(pet.status).toBe("sold");
    });
});