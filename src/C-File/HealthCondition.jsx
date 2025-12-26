import React, { useEffect, useState } from "react";
import { 
  FaWeight, 
  FaRulerVertical, 
  FaHeartbeat, 
  FaAllergies, 
  FaRunning, 
  FaSmoking, 
  FaBeer, 
  FaMoon, 
  FaExclamationTriangle, 
  FaHeartbeat as FaLifestyle 
} from "react-icons/fa";

const HealthCondition = () => {
    const [health, setHealth] = useState(null);
    const [loading, setLoading] = useState(true);

    // BMI states
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [unit, setUnit] = useState("ft"); // 'ft' or 'cm'
    const [bmi, setBmi] = useState(null);
    const [bmiCategory, setBmiCategory] = useState("");
    const [bmiSuggestion, setBmiSuggestion] = useState("");

    useEffect(() => {
        const fetchHealthData = async () => {
            try {
                const data = {
                    "name": "Siam",
                    "age": 20,
                    "gender": "Male",
                    "height": "5.3",
                    "weight": "47+",
                    "bloodGroup": "A+",
                    "allergies": "Dust",
                    "chronicDisease": "None",
                    "lifestyle": "Active",
                    "smoking": "No",
                    "alcohol": "No",
                    "sleepHours": "7-8 hours",
                    "exercise": "Sprinting 4/7",
                    "stressLevel": "Moderate"
                    
                };

                setHealth(data);
            } catch (error) {
                console.error("Failed to load health data", error);
            } finally {
                setLoading(false);
            }
        };
        fetchHealthData();
    }, []);

    const calculateBMI = () => {
        if (!weight || !height) return;

        let heightMeters = 0;
        if (unit === "ft") {
            heightMeters = parseFloat(height) * 0.3048; // convert ft to meters
        } else {
            heightMeters = parseFloat(height) / 100; // cm to meters
        }

        const bmiValue = parseFloat(weight) / (heightMeters * heightMeters);
        setBmi(bmiValue.toFixed(1));

        let category = "";
        let suggestion = "";

        if (bmiValue < 18.5) {
            category = "Underweight";
            suggestion = "You may need to gain weight. Eat a balanced diet rich in proteins and healthy fats.";
        } else if (bmiValue < 24.9) {
            category = "Normal";
            suggestion = "Your weight is normal. Maintain a healthy lifestyle with regular exercise and balanced diet.";
        } else if (bmiValue < 29.9) {
            category = "Overweight";
            suggestion = "You may need to lose some weight. Focus on regular exercise and a low-calorie, nutritious diet.";
        } else {
            category = "Obese";
            suggestion = "You should consult a healthcare professional for advice on weight management and healthy lifestyle changes.";
        }

        setBmiCategory(category);
        setBmiSuggestion(suggestion);
    };

    if (loading)
        return <div className="p-6 text-center text-gray-400">Loading health info...</div>;
    if (!health)
        return <div className="p-6 text-center text-red-500">No health data found</div>;

    return (
   <div className="flex container flex-wrap lg:flex-nowrap mx-auto lg:flex-row justify-center min-h-screen bg-gray-900 px-6 py-20 gap-8">
  {/* Health Overview Card */}
  <div className="w-full lg:w-1/2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl p-8">
    <h2 className="text-2xl font-bold mb-6 text-white text-center">Health Overview</h2>
    <div className="space-y-4">
      <Info icon={<FaRulerVertical />} label="Height" value={`${health.height} ft`} />
      <Info icon={<FaWeight />} label="Weight" value={`${health.weight} kg`} />
      <Info icon={<FaHeartbeat />} label="Blood Group" value={health.bloodGroup} />
      <Info icon={<FaAllergies />} label="Allergies" value={health.allergies} />
      <Info icon={<FaHeartbeat />} label="Lifestyle" value={health.lifestyle} />
      <Info icon={<FaSmoking />} label="Smoking" value={health.smoking} />
      <Info icon={<FaBeer />} label="Alcohol" value={health.alcohol} />
      <Info icon={<FaMoon />} label="Sleep Hours" value={health.sleepHours} />
      <Info icon={<FaExclamationTriangle />} label="Stress Level" value={health.stressLevel} />
      <Info icon={<FaRunning />} label="Exercise" value={health.exercise} />
    </div>
  </div>

  {/* BMI Calculator */}
  <div className="w-full lg:w-1/2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl p-8">
    <h2 className="text-2xl font-bold mb-6 text-white text-center">BMI Calculator</h2>
    <div className="flex flex-col gap-4">
      <div>
        <label className="text-white mb-1 block">Height ({unit})</label>
        <div className="flex gap-2 items-center">
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder={`Your height in ${unit}`}
            className="w-3/4 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="w-1/4 px-4 py-2 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option className="text-black font-bold" value="ft">ft</option>
            <option className="text-black font-bold" value="cm">cm</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-white mb-1 block">Weight (kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Your weight in kg"
          className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button
        onClick={calculateBMI}
        className="mt-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-semibold transition transform hover:-translate-y-1 hover:shadow-lg"
      >
        Calculate BMI
      </button>

      {bmi && (
        <div className="text-center mt-4">
          <p className="text-white">
            Your BMI: <span className="font-bold text-blue-400">{bmi}</span> —{" "}
            <span className="font-semibold text-green-400">{bmiCategory}</span>
          </p>
          <p className="text-gray-300 mt-2">{bmiSuggestion}</p>
        </div>
      )}
    </div>
  </div>
</div>

    );
};

const Info = ({ label, value, icon }) => (
    <div className="flex items-center justify-between border-b border-white/20 pb-2">
        <div className="flex items-center gap-2 text-white/80">
            {icon && <span className="text-blue-400">{icon}</span>}
            <span>{label}</span>
        </div>
        <span className="font-medium text-white">{value || "N/A"}</span>
    </div>
);

export default HealthCondition;
