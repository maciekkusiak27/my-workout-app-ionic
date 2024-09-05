import { TrainingPlan } from "./types";

const trainingPlan: TrainingPlan = {
    name: "Plan 1",
    description: "Plan treningowy do ćwiczenia w domu 3-4x w tygodniu",
    plan: [
      {
        day: "day1",
        description: 'dwa pierwsze w superserii, trzecie po przerwie 30s',
        exercises: [
          {
            instruction: "cwiczenie 1",
            weight: '10kg',
            replies: 12,
            series: 4
          },
          {
            instruction: "cwiczenie 2",
            weight: '10kg',
            replies: 12,
            series: 4
          },
          {
            instruction: "cwiczenie 3",
            weight: '10kg',
            replies: 12,
            series: 4
          },
          {
            instruction: "drążek",
            weight: '',
            replies: 12,
            series: 4
          }
        ]
      },
      {
        day: "day2",
        description: 'dwa pierwsze w superserii, trzecie po przerwie 30s',
        exercises: [
            {
              instruction: "cwiczenie 1",
              weight: '10kg',
              replies: 12,
              series: 4
            },
            {
              instruction: "cwiczenie 2",
              weight: '10kg',
              replies: 12,
              series: 4
            },
            {
              instruction: "cwiczenie 3",
              weight: '10kg',
              replies: 12,
              series: 4
            },
          ]
      },
      {
        day: "day3",
        description: 'dwa pierwsze w superserii, trzecie po przerwie 30s',
        exercises: [
            {
              instruction: "cwiczenie 1",
              weight: '10kg',
              replies: 12,
              series: 4
            },
            {
              instruction: "cwiczenie 2",
              weight: '10kg',
              replies: 12,
              series: 4
            },
            {
              instruction: "cwiczenie 3",
              weight: '10kg',
              replies: 12,
              series: 4
            },
          ]
      },
      {
        day: "day4",
        description: 'dwa pierwsze w superserii, trzecie po przerwie 30s',
        exercises: [
            {
              instruction: "cwiczenie 1",
              weight: '10kg',
              replies: 12,
              series: 4
            },
            {
              instruction: "cwiczenie 2",
              weight: '10kg',
              replies: 12,
              series: 4
            },
            {
              instruction: "cwiczenie 3",
              weight: '10kg',
              replies: 12,
              series: 4
            },
            {
              instruction: "drążek",
              weight: '',
              replies: 12,
              series: 4
            }
          ]
      }
    ]
  };
  
  export default trainingPlan;