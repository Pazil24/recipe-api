import { Router } from 'express';
import Recipe from '../models/recipe.js'

const router = Router();

router.post('/recipes', (req, res) => {

    res.send('A new Recipe was created').status(201);
});

router.get('/recipes', (req, res) => {

    res.json(Recipe).status(200);
});

router.get('/recipes/:id', (req, res) => {

    res.json(Recipe).status(200);
});

router.patch('/recipes/:id', (req, res) => {

    res.send('One Recipe updated').status(200);
});

router.delete('/recipes/:id', (req, res) => {

    res.send('One Recipe deleted').status(200);
});

export default router;