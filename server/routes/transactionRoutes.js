const express = require('express');
const router = express.Router();
const { getTransactionsByUserId, addTransaction } =
  require('../controllers/transactionController');

router.get('/:userId', getTransactionsByUserId);
router.post('/', addTransaction);

module.exports = router;
