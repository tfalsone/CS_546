const mongoCollections = require("../config/mongoCollection");
const recipes = mongoCollections.recipes;
const uuid = require("node-uuid");

const exportedMethods = {
    // GET ALL (verified works)
    async getAllRecipes() {
        const recipeCollection = await recipes();
        return await recipeCollection.find({}).toArray();
    },
    // GET ONE (verified works)
    async getRecipeById(id) {
        const recipeCollection = await recipes();
        const recipe = await recipeCollection.findOne({_id: id});

        if(!recipe) throw "Recipe not found";
        console.log(recipe);
        return recipe;
    },
    // POST (gives undefined values)
    async addRecipe(title, ingredients, steps) {
        // Error checking
        // if (typeof title !== "string") throw "No title provided";
        // if (!Array.isArray(ingredients)) throw "No ingredients provided";
        // if (!Array.isArray(steps)) throw "No steps provided";

        console.log(title);

        const recipeCollection = await recipes();
        const newRecipe = {
            _id: uuid.v4(),
            title: title,
            ingredients: ingredients,
            steps: steps,
        };

        const newRecipeInfo = await recipeCollection.insertOne(newRecipe);
        const newId = newRecipeInfo.insertedId;
        return await this.getRecipeById(newId);
    },
    // DELETE (deletes item, but never finished loading in postman)
    async deleteRecipe(id) {
        if (!id) throw "You must provide a valid recipe id";

        const recipeCollection = await recipes();
        const deletionInfo = await recipeCollection.removeOne({_id: id});
        if (deletionInfo.deletedCount === 0) {
            throw `Could not delete post with id of ${id}`;
        }
        // console.log("Recipe deleted");
    },
    // PATCH
    async updateRecipe(id, updatedRecipe) {
        if (!id) throw "You must provide a valid recipe id";

        const recipeCollection = await recipes();

        const updatedRecipeData = {};

        if (updatedRecipe.title) {
            if (typeof updatedRecipe.title !== "string") throw "No title provided";
            console.log(`Patching title with ${updatedRecipe.title}`);
            // updatedRecipeData.title = updatedRecipe.title;
            updatedRecipeData["title"] = updatedRecipe.title;
        }

        if (updatedRecipe.ingredients) {
            if (!Array.isArray(updatedRecipe.ingredients)) throw "No ingredients provided";
            console.log(`Patching ingredients with ${updatedRecipe.ingredients}`);
            // updatedRecipeData.ingredients = updatedRecipe.ingredients;
            updatedRecipeData["ingredients"] = updatedRecipe.ingredients;
        }

        if (updatedRecipe.steps) {
            if (!Array.isArray(updatedRecipe.steps)) throw "No steps provided";
            console.log(`Patching steps with ${updatedRecipe.steps}`);
            // updatedRecipeData.steps = updatedRecipe.steps;
            updatedRecipeData["steps"] = updatedRecipe.steps;
        }

        console.log("The new recipe data: ");
        console.log(updatedRecipeData);

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
    async putRecipe(id, newRecipe) {
        if (!id) throw "You must provide a valid recipe id";
        if (typeof newRecipe.title !== "string") throw "No title provided";
        if (!Array.isArray(newRecipe.ingredients)) throw "No ingredients provided";
        if (!Array.isArray(newRecipe.steps)) throw "No steps provided";

        const recipeCollection = await recipes();

        const updatedRecipeData = {
            _id: id,
            title: newRecipe.title,
            ingredients: newRecipe.ingredients,
            steps: newRecipe.steps
        };

        const updatedInfo = await recipeCollection.replaceOne({_id:id}, updatedRecipeData);
        if (updatedInfo.modifiedCount === 0) throw "Unable to update recipe";
        
        return await this.getRecipeById(id, newRecipe);
    }
};

module.exports = exportedMethods;