
import express from 'express';
import BudgetPlan from '../model/Budget.js'

const budgetRoute = express.Router();


// GET all pricing plans
budgetRoute.get('/', async (req, res) => {
  try {
    const plans = await BudgetPlan.find();
    res.json(plans);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET single pricing plan by ID
budgetRoute.get('/:id', async (req, res) => {
  try {
    const plan = await BudgetPlan.findById(req.params.id);
    if (!plan) return res.status(404).json({ message: 'Plan not found' });
    res.json(plan);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE new pricing plan
budgetRoute.post('/', async (req, res) => {
  const plan = new BudgetPlan({
    title: req.body.title,
    price: req.body.price,
    details: req.body.details,
  });

  try {
    const newPlan = await plan.save();
    res.status(201).json(newPlan);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// UPDATE pricing plan by ID
budgetRoute.put('/:id', async (req, res) => {
  try {
    const plan = await BudgetPlan.findById(req.params.id);
    if (!plan) return res.status(404).json({ message: 'Plan not found' });

    if (req.body.title !== undefined) plan.title = req.body.title;
    if (req.body.price !== undefined) plan.price = req.body.price;
    if (req.body.details !== undefined) plan.details = req.body.details;

    const updatedPlan = await plan.save();
    res.json(updatedPlan);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE pricing plan by ID
budgetRoute.delete('/:id', async (req, res) => {
  try {
    const plan = await BudgetPlan.findById(req.params.id);
    if (!plan) return res.status(404).json({ message: 'Plan not found' });

    await plan.remove();
    res.json({ message: 'Deleted plan' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default budgetRoute;
