from MotorDriver import MotorDriver

class Mixer(MotorDriver):
    def __init__(self):
        print("works")

    def move_platform(self):
        self.turn_axis()