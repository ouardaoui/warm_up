class Item : 
    rate = 0.8
    all = []
    def __init__(self, name : str, price : float, count : int ) -> None:
        assert price >= 0 , f"price should be more or equal zero"
        assert count >= 0 , f"quantity should be more or equal zero"
        print(f"im {name}'s constructor ")
        self.name = name 
        self.price = price 
        self.count = count
        Item.all.append(self)
    def calcul(self) -> float : 
        return (self.price * self.count)
    def descount(self) -> None : 
        #self.price = self.price * Item.rate 
        self.price = self.price * self.rate
    def __repr__(self) -> str:
        return f"Item('{self.name}' ,{self.price} , {self.count})"

item1  = Item("laptop", 100 , 3)
item2  = Item("phone",  30 , 6)
item3  = Item("cable",  10 , 20)
item4  = Item("mouse",  20 , 3)
item5  = Item("keyboard",  60 , 2)

print(item1.calcul())
# print(Item.__dict__) all attribute in class lvl 
# print(item1.__dict__)  all attribute in  instance lvl
item2.descount()
print(item2.price)

print(Item.all)


