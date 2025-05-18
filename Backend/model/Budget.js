
import mongoose from 'mongoose';

const BudgetSchema = new mongoose.Schema({
  title: String,
  price: Number,
  details: mongoose.Schema.Types.Mixed, // object with keys and arrays of strings
});

const BudgetPlan = mongoose.model('BudgetPlan', BudgetSchema);

export default BudgetPlan;
