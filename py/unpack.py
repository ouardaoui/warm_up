def greething(first_name, last_name) : 
    return f"Hello, {first_name} {last_name}"

n_dict = {"first_name" : "john", "last_name" : "Doe" } 

print(greething(**n_dict))
