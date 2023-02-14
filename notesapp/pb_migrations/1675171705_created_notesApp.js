migrate((db) => {
  const collection = new Collection({
    "id": "jufa4ap07j1ecez",
    "created": "2023-01-31 13:28:25.664Z",
    "updated": "2023-01-31 13:28:25.664Z",
    "name": "notesApp",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rz2njksv",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "rbp9gldo",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jufa4ap07j1ecez");

  return dao.deleteCollection(collection);
})
