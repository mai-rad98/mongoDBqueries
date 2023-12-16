
---

## MongoDB Queries

### Basic Query Operators

#### Find Documents
- `db.collection.find()`: Retrieve all documents in a collection.
- `db.collection.find({ field: value })`: Retrieve documents where a specific field matches a value.
- `db.collection.find({ field: { $gt: value } })`: Retrieve documents where a field is greater than a value.
- `db.collection.find({ field: { $in: [value1, value2] } })`: Retrieve documents where a field matches any value in an array.

#### Query Modifiers
- `limit()`: Limit the number of documents returned.
- `sort()`: Sort documents based on specified criteria.
- `skip()`: Skip a specified number of documents.

### Advanced Query Operators

#### Logical Operators
- `$and`: Joins query clauses with a logical AND.
- `$or`: Joins query clauses with a logical OR.
- `$not`: Inverts the effect of a query expression.

#### Element Operators
- `$exists`: Matches documents that contain the specified field.
- `$type`: Matches documents where the field value is of a certain type.

#### Array Operators
- `$all`: Matches arrays that contain all elements specified in the query.
- `$elemMatch`: Matches documents that contain an array field with at least one element matching specified criteria.

### Update Operations
- `updateOne()`: Update the first document that matches the query.
- `updateMany()`: Update all documents that match the query.
- `$set`: Update fields to specified values.
- `$unset`: Remove specified fields from documents.
- `$inc`: Increment the value of a field.

### Delete Operations
- `deleteOne()`: Delete the first document that matches the query.
- `deleteMany()`: Delete all documents that match the query.

### Aggregation

#### Aggregation Pipeline Stages
- `$match`: Filter documents based on specified criteria.
- `$group`: Group documents by a specified key and perform operations on grouped data.
- `$sort`: Sort documents.
- `$project`: Include, exclude, or rename fields in the output.
- `$limit`: Limit the number of documents in the output.
- `$skip`: Skip a specified number of documents in the output.

---

