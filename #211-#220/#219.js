const removeRotten = bagOfFruits => bagOfFruits ? bagOfFruits.map(el => (el.replace('rotten', '')).toLowerCase()) : [];