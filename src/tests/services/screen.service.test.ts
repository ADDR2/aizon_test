import ScreensService from '../../services/screens.service';
import SolutionSchema, { Solution } from '../../models/solutions.model';
import { Screen } from '../../models/screens.model';
import { Types } from 'mongoose';
import { CreateScreensBody } from '../../interfaces/Screens';

jest.mock('../../models/solutions.model');

describe('Screen Service Tests', function() {
    beforeAll(() => {
        this.MockedSolutionSchema = <jest.Mock<Solution>><unknown>SolutionSchema;
    });

    afterEach(() => {
        this.MockedSolutionSchema.findOne.mockClear();
        this.MockedSolutionSchema.updateOne.mockClear();
    });

    it('should create screen and update solution when everything is ok', async () => {
        const mockedSolution: Partial<Solution> = {
            company: "some company",
            business: "some business",
            screens: new Types.DocumentArray<Screen>()
        };
        const mockedScreenBody: CreateScreensBody = {
            width: 33,
            height: 24
        };
        const mockedSolutionId = "43782950";

        this.MockedSolutionSchema.findOne.mockResolvedValue(mockedSolution);
        this.MockedSolutionSchema.updateOne.mockResolvedValue(true);

        const result = await ScreensService.create(
            mockedScreenBody,
            mockedSolutionId
        );

        expect(result).toEqual(mockedScreenBody);

        expect(this.MockedSolutionSchema.findOne).toHaveBeenCalled();
        expect(this.MockedSolutionSchema.findOne).toHaveBeenCalledWith({ _id: mockedSolutionId });
        expect(this.MockedSolutionSchema.findOne.mock.calls.length).toBe(1);

        expect(this.MockedSolutionSchema.updateOne).toHaveBeenCalled();
        expect(this.MockedSolutionSchema.updateOne).toHaveBeenCalledWith(
            { _id: mockedSolutionId },
            { $push: { screens: mockedScreenBody } }
        );
        expect(this.MockedSolutionSchema.updateOne.mock.calls.length).toBe(1);
    });

    it('should throw "Solution not found" when solutionId is not found', async () => {
        const mockedScreenBody: CreateScreensBody = {
            width: 33,
            height: 24
        };
        const mockedSolutionId = "43782950";

        this.MockedSolutionSchema.findOne.mockResolvedValue(null);
        this.MockedSolutionSchema.updateOne.mockResolvedValue(true);

        try {
            await ScreensService.create(
                mockedScreenBody,
                mockedSolutionId
            );
            
            expect(1).toBe(2);
        } catch(error) {
            expect(error.message).toBe('Solution not found');

            expect(this.MockedSolutionSchema.findOne).toHaveBeenCalled();
            expect(this.MockedSolutionSchema.findOne).toHaveBeenCalledWith({ _id: mockedSolutionId });
            expect(this.MockedSolutionSchema.findOne.mock.calls.length).toBe(1);

            expect(this.MockedSolutionSchema.updateOne).not.toHaveBeenCalled();
        }        
    });
});