import instanceOfTypes from "~/utils/instanceOfTypes"
import makeDict from "./index"

describe("makeDict", () => {
  it("可以正常从数组生成字典", () => {
    const array = ["foo", "bar", 42, "mos"]

    expect(makeDict(array)).toEqual({
      foo: "foo",
      bar: "bar",
      42: 42,
      mos: "mos",
    })
  })
  it("如果参数非数组，应该throw", () => {
    instanceOfTypes.forEach((instance: unknown) =>
      expect(() => makeDict(instance as Array<unknown>)).toThrowError(),
    )
  })
})
