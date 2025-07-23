import{ref,computed} from 'vue';

type Item = {
    name:string;
    actualAmount:number;
    minimumAmount:number;
    id:number;
};

const inventory = ref([{
        name: 'Bread',
        minimumAmount: 1,
        actualAmount: 5,
        id:0,
    },
    {
        name: 'Broccoli',
        minimumAmount: 1,
        actualAmount: 6,
        id:1
    },
    {
        name: 'Scones',
        minimumAmount: 1,
        actualAmount: 3,
        id:2
    },
    {
        name: 'Nuts',
        minimumAmount: 1,
        actualAmount: 4,
        id:3
    },
{
        name: 'Bolts',
        minimumAmount: 1,
        actualAmount: 7,
        id:4
    },
{
        name: 'Tomatoes',
        minimumAmount: 1,
        actualAmount: 9,
        id:5
    },
{
        name: 'Cucumber',
        minimumAmount: 1,
        actualAmount: 2,
        id:6
    },]);

const assignId = () =>{
     inventory.value.forEach((item:Item, index) => {
    item.id = index;
  });
};



export const getInventory = computed(() => inventory.value);
export const getItemById = (id : number) => computed(() => inventory.value.find((item:Item) => item.id == id));
export const updateItem = (item: Item) => inventory.value[item.id]=item;
export const addItem = (item: Item) => {
    inventory.value.push(item);
    assignId();
}
export const removeItem = (id:number) => {
    inventory.value.splice(id,1);
    assignId();
}