import { sum } from "../sum";

test("Sum function should calculate the su  of the numbers",()=>{
    const result = sum(2, 3);

    expect(result).toBe(5);
});
//fdg