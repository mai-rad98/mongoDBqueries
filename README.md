# mongoDBqueries
mongoDBqueries
Basic Queries:
1. Find Documents:
Retrieve all documents in a collection:
javascript
Copy code
db.collectionName.find()
2. Filtering:
Find documents based on a specific condition:
javascript
Copy code
db.collectionName.find({ key: value })
3. Projection:
Select specific fields to return:
javascript
Copy code
db.collectionName.find({}, { field1: 1, field2: 1 })
4. Sorting:
Sort documents in ascending or descending order:
javascript
Copy code
db.collectionName.find().sort({ field: 1 }) // Ascending
db.collectionName.find().sort({ field: -1 }) // Descending
Aggregation Framework:
1. Grouping:
Group documents by a specified key:
javascript
Copy code
db.collectionName.aggregate([
  { $group: { _id: "$key", total: { $sum: "$value" } } }
])
2. Aggregation with Match:
Filter data before aggregation:
javascript
Copy code
db.collectionName.aggregate([
  { $match: { key: value } },
  { $group: { _id: "$key", total: { $sum: "$value" } } }
])
3. Lookup:
Perform a left outer join between collections:
javascript
Copy code
db.collection1.aggregate([
  {
    $lookup: {
      from: "collection2",
      localField: "field",
      foreignField: "field",
      as: "alias"
    }
  }
])
Indexing:
1. Creating an Index:
Create an index on a specific field:
javascript
Copy code
db.collectionName.createIndex({ field: 1 })
2. Index Types:
Different types of indexes (e.g., compound indexes, text indexes):
javascript
Copy code
db.collectionName.createIndex({ field1: 1, field2: -1 })
db.collectionName.createIndex({ textField: "text" })
Update Operations:
1. Update Documents:
Update a document with a specific condition:
javascript
Copy code
db.collectionName.updateOne({ key: value }, { $set: { newKey: newValue } })
2. Update Operators:
Use operators for specific update actions:
javascript
Copy code
db.collectionName.updateMany({}, { $inc: { count: 1 } }) // Increment
db.collectionName.updateMany({}, { $unset: { key: "" } }) // Unset a field