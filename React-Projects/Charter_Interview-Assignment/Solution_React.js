import React, { useState, useEffect } from "react";

const calculatePoints = (amount) => {
  let points = 0;
  if (amount > 100) {
    points += 2 * (amount - 100);
  }
  if (amount > 50) {
    points += 1 * (Math.min(amount, 100) - 50);
  }
  return points;
};

const Rewards = () => {
  const [transactions, setTransactions] = useState([]);
  const [pointsPerMonth, setPointsPerMonth] = useState({});
  const [totalPoints, setTotalPoints] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.com/transactions");
      const data = await response.json();
      setTransactions(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    let pointsPerMonth = {};
    let totalPoints = 0;
    transactions.forEach((transaction) => {
      const date = new Date(transaction.date);
      const month = date.getMonth();
      const points = calculatePoints(transaction.amount);
      if (!pointsPerMonth[month]) {
        pointsPerMonth[month] = 0;
      }
      pointsPerMonth[month] += points;
      totalPoints += points;
    });
    setPointsPerMonth(pointsPerMonth);
    setTotalPoints(totalPoints);
  }, [transactions]);

  return (
    <div>
      <h2>Rewards</h2>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(pointsPerMonth).map(([month, points]) => (
            <tr key={month}>
              <td>{month}</td>
              <td>{points}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total Points: {totalPoints}</h3>
    </div>
  );
};

export default Rewards;
