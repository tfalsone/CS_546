const mongoCollections = require("../config/mongoCollection");
const recipes = mongoCollections.recipes;
const uuid = require("node-uuid");

const exportedMethods = {
    // GET ALL
    async getAllRecipes() {
        const recipeCollection = await recipes();
        return await recipeCollection.find({}).toArray();
    },
    // GET ONE
    async getRecipeById(id) {
        const recipeCollection = await recipes();
        const recipe = await recipeCollection.findOne({_id: id});

        if(!recipe) throw "Recipe not found";
        return recipe;
    },
    // POST
    async addRecipe(title, ingredients, steps) {
        //if (typeof title != "string") throw "No title provided";
        // Need more error checking?
        
        const recipeCollection = await recipes();
        const newRecipe = {
            _id: uuid.v4(),
            title: title,
            ingredients: ingredients,
            steps: steps
        };

        const newInsertInformation = await recipeCollection.insertOne(newRecipe);
        const newId = newInsertInformation._id; // is insertedId correct?
        return await this.getRecipeById(newId);
    },
    // DELETE
    async deleteRecipe(id) {
        const recipeCollection = await recipes();
        const deletionInfo = await recipeCollection.removeOne({_id: id});
        if (deletionInfo.deletedCount === 0) {
            throw `Could not delete post with id of ${id}`;
        }
        return deletionInfo;
    },
    // PATCH
    async updateRecipe(id, updatedRecipe) {
        const recipeCollection = await recipes();

        const updatedRecipeData = {};

        if (updatedRecipe.title) {
            updatedRecipeData.title = updatedRecipe.title;
        }

        if (updatedRecipe.ingredients) {
            updatedRecipeData.ingredients = updatedRecipe.ingredients;
        }

        if (updatedRecipe.steps) {
            updatedRecipeData.steps = updatedRecipe.steps;
        }

        let updateCommand = {
            $set: updatedRecipeData
        };
        const query = {
            _id: id
        };
        await recipeCollection.updateOne(query, updateCommand);

        return await this.getRecipeById(id);
    },
    // PUT
    async newRecipeWithId(id, newRecipeDetails) {
        if (typeof title != "string") throw "No title provided";
        // Need more error checking?
        
        const recipeCollection = await recipes();
        const newRecipe = {
            _id: id,
            title: newRecipeDetails.title,
            ingredients: newRecipeDetails.ingredients,
            steps: newRecipeDetails.steps
        };

        const newInsertInformation = await recipeCollection.insertOne(newRecipe);
        const newId = newInsertInformation._id; // is insertedId correct?
        return await this.getRecipeById(newId);
    },
    async putRecipe(id, newRecipe) {
        const recipeCollection = await recipes();
        this.deleteRecipe(id);
        
        return await this.newRecipeWithId(id, newRecipe);
    }
};

module.exports = exportedMethods;