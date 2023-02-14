migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jufa4ap07j1ecez")

  collection.name = "notes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jufa4ap07j1ecez")

  collection.name = "notesApp"

  return dao.saveCollection(collection)
})
