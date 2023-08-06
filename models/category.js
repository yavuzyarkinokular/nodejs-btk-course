const categories=[

    {id:'1', name:' telefon',description:'Telefon kategorisi ürün'}
    {id:'2', name:' bilgisayar',description:'bilgisayar kategorisi ürün'}
    {id:'3', name:' beyaz eşya',description:'beyaz eşya kategorisi ürün'}

 
]

module.exports= class Category{
    constructor(name,descripton){
        this.id=(categories.length+1).toString();
        this.name=name;
        this.description=description;
    }
    saveCategory(){//Category e kayıt yapacağımız için push methodu
        categories.push(this); 
    }

    static getAll(){
        return categories;


    }
    static getById(id){
        return categories.find((i)=>i.id===id)
    }
    static update(category){
        const index = categories.findIndex(i=>i.id === category.id)
        categories[index].name=category.name;
        categories[index].description=category.description;

    }
    static delete(id){
        const index = categories.findIndex(i=>i.id === category.id);
        categories.splice(index,1)
    }
}