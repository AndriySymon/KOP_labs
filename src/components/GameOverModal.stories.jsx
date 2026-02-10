import GameOverModal from "./GameOverModal";

export default {
  title: "Game/GameOverModal",
  component: GameOverModal,
  argTypes: {
    onRestart: { action: "restart game" },
    onExit: { action: "exit game" },
  },
};

export const Win = {
  args: {
    results: {
      success: true,
      time: 65,
      moves: 42,
    },
  },
};

export const Lose = {
  args: {
    results: {
      success: false,
      time: 120,
      moves: 80,
    },
  },
};

export const FastWin = {
  args: {
    results: {
      success: true,
      time: 20,
      moves: 15,
    },
  },
};