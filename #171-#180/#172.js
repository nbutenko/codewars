function hello(name) {
    return !name ? 'Hello, World!' : 'Hello, '+name[0].toUpperCase()+name.slice(1,name.length).toLowerCase()+'!';
}