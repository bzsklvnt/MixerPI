from DRV8825 import DRV8825
import time  ## only for testing

"""
TODO
egy teljes kor hany centit mozgat a platformon

"""

class MotorDriver:
    # These arguments are required to create motor motion
    def __init__(self, direction, distance):
        self.direction = direction
        self.distance = distance

    def turn_axis(self, direction, distance):
        # Motor1 = DRV8825(dir_pin=13, step_pin=19, enable_pin=12, mode_pins=(16, 17, 20))
        # Motor1.SetMicroStep('softward','fullstep')
        # Motor1.TurnStep(Dir=direction, steps=distance, stepdelay = 0.005)
        # time.sleep(1)
        # Motor1.Stop()
        print(f'turn {direction}, {distance}')

