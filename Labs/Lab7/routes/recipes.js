const express = require("express");
const router = express.Router();
const data = require("../data");
const recipeData = data.recipes;

router.get("/", async (req, res) => {
    try {
        const recipeList = await recipeData.getAllRecipes();
        res.json(recipeList);
    } catch (e) {
        res.status(500).json({error: e});
    }
});

router.get("/:id", async (req, res) => {
    try {
        const recipe = await recipeData.getRecipeById(req.params.id);
        // console.log(recipe.title);
        res.json(recipe);
    } catch (e) {
        res.status(404).json({error: e});
    }
});

router.post("/", async (req, res) => {
    console.log(req);
    const recipePostData = req.body;
    // console.log(recipePostData);
    try {
        const { title, ingredients, steps } = recipePostData;
        const newRecipe = await recipeData.addRecipe(title, ingredients, steps);
        console.log('\n');
        console.log(newRecipe);
        res.json(newRecipe);
    } catch (e) {
        res.status(500).json({error: e});
    }
});

router.put("/:id", async (req, res) => {
    const updatedData = req.body;
    try {
        await recipeData.getRecipeById(req.params.id);
    } catch (e) {
        res.status(404).json({error: "Recipe not found"});
    }

    try {
        const updatedRecipe = await recipeData.putRecipe(req.params.id, updatedData);
        res.json(updatedRecipe);
    } catch (e) {
        res.status(500).json({error: e});
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await recipeData.getRecipeById(req.params.id);
    } catch (e) {
        res.status(404).json({error: "Recipe not found"});
    }

    try {
        await recipeData.deleteRecipe(req.params.id);
    } catch (e) {
        res.status(500).json({error: e});
    }
});

router.patch("/:id", async (req, res) => {
    const updatedData = req.body;
    try {
        await recipeData.getRecipeById(req.params.id);
    } catch (e) {
        res.status(404).json({error: "Recipe not found"});
    }

    try {
        await recipeData.updateRecipe(req.params.id, updatedData);
    } catch (e) {
        res.status(500).json({error: e});
    }
});

module.exports = router;