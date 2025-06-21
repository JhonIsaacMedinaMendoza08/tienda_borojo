//use tienda_borojo

// ### Inserción
// 1. Insertar un nuevo producto llamado `"Chocolatina de borojó"`, categoría `"Snack"`, con precio `4000`, stock `35`, y tags `["dulce", "energía"]`.
db.productos.insertOne({
  _id: 11,
  nombre: "Chocolatina de borojó",
  categoria: "Snack",
  precio: 4000,
  stock: 35,
  tags: ["dulce", "energía"]
});
// 2. Insertar un nuevo cliente que se llama `"Mario Mendoza"`, con correo `"mario@email.com"`, sin compras, y preferencias `"energético"` y `"natural"`.
db.clientes.insertOne({
  _id: 11,
  nombre: "Mario Mendoza",
  email: "mario@email.com",
  compras: [],
  preferencias: ["energético", "natural"]
});
// ### Lectura
// 1. Consultar todos los productos que tengan stock mayor a 20 unidades.
db.productos.find({ stock: { $gt: 20 } },{ nombre: 1, _id: 0 })
// 2. Encontrar los clientes que no han comprado aún ningún producto.
db.clientes.find({ compras: { $size: 0 } },{ nombre: 1, _id: 0 })
// ### Actualización
// 1. Aumentar en 10 unidades el stock del producto `"Borojó deshidratado"`.
db.productos.updateOne({nombre:"Borojó deshidratado"},{$inc:{stock:10}})
// 2. Añadir el tag `"bajo azúcar"` a todos los productos de la categoría `"Bebida"`.
db.productos.updateMany({categoria:"Bebida"},{$push:{ tags: "bajo azúcar" }})
// ### Eliminación
// 1. Eliminar el cliente que tenga el correo `"juan@email.com"`.
db.clientes.deleteOne({ email: "juan@email.com" });
// 2. Eliminar todos los productos con stock menor a 5 (considera esto como un proceso de limpieza de inventario).
db.productos.deleteMany({ stock: { $lt: 5 } });
// ### Consultas con Expresiones Regulares
// 1. Buscar productos cuyo nombre **empiece** por `"Boro"`.
db.productos.find({ nombre: { $regex: "^Boro", $options: "i" } });
// 2. Encontrar productos cuyo nombre contenga la palabra `"con"` (como en “Concentrado de borojó”).
db.productos.find({ nombre: { $regex: "con", $options: "i" } });
// 3. Encontrar clientes cuyo nombre tenga la letra `"z"` (insensible a mayúsculas/minúsculas).
db.clientes.find({ nombre: { $regex: "z", $options: "i" } });
// ### Operadores en consultas sobre arrays
// 1. Buscar clientes que tengan `"natural"` en sus preferencias.

// 2. Encontrar productos que tengan al menos los tags `"natural"` y `"orgánico"` (usa `$all`).

// 3. Listar productos que tienen **más de un tag** (`$size`).

// ### Aggregation Framework con Pipelines
// 1. Mostrar un listado de los productos más vendidos (suma total de unidades vendidas por producto).

// 2. Agrupar clientes por cantidad de compras realizadas.

// 3. Mostrar el total de ventas por mes (usa `$group` y `$month`).

// 4. Calcular el promedio de precios por categoría de producto.

// 5. Mostrar los 3 productos con mayor stock (orden descendente con `$sort` y `$limit`).

// ### Funciones definidas en `system.js`
// 1. Definir una función `calcularDescuento(precio, porcentaje)` que devuelva el precio con descuento aplicado.

// 2. Definir una función `clienteActivo(idCliente)` que devuelva `true` si el cliente tiene más de 3 compras registradas.

// 3. Definir una función `verificarStock(productoId, cantidadDeseada)` que retorne si hay suficiente stock.

// ### Transacciones
// 1. Simular una venta:
//     a. Descontar del stock del producto
//     b. Insertar la venta en la colección `ventas` 
//     Todo dentro de una transacción.
    
// 2. Simular la entrada de nuevo inventario:
//     a. Insertar un documento en `inventario` 
//     b. Aumentar el stock del producto correspondiente
    
//     Todo dentro de una transacción.
    
// 3. Hacer una operación de devolución:
    
//     a. Aumentar el stock
    
//     b. Eliminar la venta correspondiente
    

// ---

// ### Indexación

// 1. Crear un índice en el campo `nombre` de `productos` para mejorar búsquedas por nombre.
// 2. Crear un índice compuesto sobre `categoria` y `precio` para facilitar búsquedas filtradas por ambas condiciones.
// 3. Crear un índice en el campo `email` de `clientes` para validaciones rápidas de duplicados.
// 4. Usar `explain()` en una consulta para mostrar si el índice de `nombre` está siendo utilizado.




