import adjuster from "index";

{
	describe("type", testType);
	describe("default", testDefault);
	describe("acceptNull", testAcceptNull);
	describe("acceptEmptyString", testAcceptEmptyString);
	describe("separatedBy", testSeparatedBy);
	describe("toArray", testToArray);
	describe("minLength", testMinLength);
	describe("maxLength", testMaxLength);
	describe("number", testNumber);
	describe("string", testString);
}

/**
 * type
 * @return {void}
 */
function testType()
{
	it("should be OK", () =>
	{
		expect(adjuster.array()
			.adjust([])).toEqual([]);

		expect(adjuster.array()
			.adjust([1, 2])).toEqual([1, 2]);

		expect(adjuster.array()
			.adjust(["a", "b"])).toEqual(["a", "b"]);

		expect(adjuster.array()
			.adjust([1, "a"])).toEqual([1, "a"]);
	});
}

/**
 * default value
 * @return {void}
 */
function testDefault()
{
	it("should be adjusted", () =>
	{
		expect(adjuster.array().default([1, "a"])
			.adjust(undefined)).toEqual([1, "a"]);
	});
	it("should cause error(s)", () =>
	{
		expect(() =>
		{
			adjuster.array()
				.adjust(undefined);
		}).toThrow(adjuster.CAUSE.REQUIRED);
	});
}

/**
 * null
 * @return {void}
 */
function testAcceptNull()
{
	it("should be adjusted", () =>
	{
		expect(adjuster.array().acceptNull([1, "a"])
			.adjust(null)).toEqual([1, "a"]);
	});
	it("should cause error(s)", () =>
	{
		expect(() =>
		{
			adjuster.array()
				.adjust(null);
		}).toThrow(adjuster.CAUSE.NULL);
	});
}

/**
 * empty string
 * @return {void}
 */
function testAcceptEmptyString()
{
	it("should be adjusted", () =>
	{
		expect(adjuster.array().acceptEmptyString([1, "a"])
			.adjust("")).toEqual([1, "a"]);
	});
	it("should cause error(s)", () =>
	{
		expect(() =>
		{
			adjuster.array()
				.adjust("");
		}).toThrow(adjuster.CAUSE.EMPTY);
	});
}

/**
 * separator
 * @return {void}
 */
function testSeparatedBy()
{
	it("should be adjusted", () =>
	{
		expect(adjuster.array().separatedBy(",")
			.adjust("1,a")).toEqual(["1", "a"]);
	});
}

/**
 * convert to array
 * @return {void}
 */
function testToArray()
{
	it("should be adjusted", () =>
	{
		expect(adjuster.array().toArray()
			.adjust("abc")).toEqual(["abc"]);
	});
	it("should cause error(s)", () =>
	{
		expect(() =>
		{
			adjuster.array()
				.adjust("abc");
		}).toThrow(adjuster.CAUSE.TYPE);
	});
}

/**
 * minimum length of elements
 * @return {void}
 */
function testMinLength()
{
	it("should be OK", () =>
	{
		expect(adjuster.array().minLength(1)
			.adjust(["a"])).toEqual(["a"]);
	});
	it("should cause error(s)", () =>
	{
		expect(() =>
		{
			adjuster.array().minLength(1)
				.adjust([]);
		}).toThrow(adjuster.CAUSE.MIN_LENGTH);
	});
}

/**
 * maximum length of elements
 * @return {void}
 */
function testMaxLength()
{
	it("should be OK", () =>
	{
		expect(adjuster.array().maxLength(1)
			.adjust([1])).toEqual([1]);

		expect(adjuster.array().maxLength(1, true)
			.adjust([1])).toEqual([1]);
	});
	it("should be adjusted", () =>
	{
		expect(adjuster.array().maxLength(1, true)
			.adjust([1, 2])).toEqual([1]);
	});
	it("should cause error(s)", () =>
	{
		expect(() =>
		{
			adjuster.array().maxLength(1)
				.adjust([1, 2]);
		}).toThrow(adjuster.CAUSE.MAX_LENGTH);
	});
}

/**
 * array of number
 * @return {void}
 */
function testNumber()
{
	it("should be OK", () =>
	{
		expect(adjuster.array().each(adjuster.number())
			.adjust([3.14, 2.71])).toEqual([3.14, 2.71]);

		expect(adjuster.array().each(adjuster.number().integer())
			.adjust([1, 2, 3])).toEqual([1, 2, 3]);

		expect(adjuster.array().each(adjuster.number().only(1, 2, 3))
			.adjust([1, 2, 3])).toEqual([1, 2, 3]);

		expect(adjuster.array().each(adjuster.number().minValue(10))
			.adjust([10, 11, 12])).toEqual([10, 11, 12]);
		expect(adjuster.array().each(adjuster.number().maxValue(10))
			.adjust([8, 9, 10])).toEqual([8, 9, 10]);
	});
	it("should be adjusted", () =>
	{
		expect(adjuster.array().each(adjuster.number())
			.adjust([false, true, 2, "+3", "-4"])).toEqual([0, 1, 2, 3, -4]);

		expect(adjuster.array().each(adjuster.number(), true)
			.adjust([false, "abc", true, "+2"])).toEqual([0, 1, 2]);

		expect(adjuster.array().separatedBy(",").each(adjuster.number())
			.adjust("1,2,3")).toEqual([1, 2, 3]);

		expect(adjuster.array().each(adjuster.number().default(999))
			.adjust(["1", undefined, 3])).toEqual([1, 999, 3]);
		expect(adjuster.array().each(adjuster.number().acceptNull(999))
			.adjust(["1", null, 3])).toEqual([1, 999, 3]);
		expect(adjuster.array().each(adjuster.number().acceptEmptyString(999))
			.adjust(["1", "", 3])).toEqual([1, 999, 3]);

		expect(adjuster.array().each(adjuster.number().acceptSpecialFormats())
			.adjust(["1e+2", "0x100", "0o100", "0b100"])).toEqual([100, 256, 64, 4]);

		expect(adjuster.array().each(adjuster.number().integer(true))
			.adjust([3.14, -3.14, "3.14"])).toEqual([3, -3, 3]);

		expect(adjuster.array().each(adjuster.number().minValue(10, true))
			.adjust([9, 10, 11])).toEqual([10, 10, 11]);
		expect(adjuster.array().each(adjuster.number().maxValue(10, true))
			.adjust([9, 10, 11])).toEqual([9, 10, 10]);
	});
	it("should cause error(s)", () =>
	{
		expect(() =>
		{
			adjuster.array().each(adjuster.number())
				.adjust([false, "abc", true, "+2"]);
		}).toThrow(adjuster.CAUSE.EACH_TYPE);

		expect(() =>
		{
			adjuster.array().each(adjuster.number())
				.adjust([1, undefined, 3]);
		}).toThrow(adjuster.CAUSE.EACH_REQUIRED);
		expect(() =>
		{
			adjuster.array().each(adjuster.number())
				.adjust([1, null, 3]);
		}).toThrow(adjuster.CAUSE.EACH_NULL);
		expect(() =>
		{
			adjuster.array().each(adjuster.number())
				.adjust([1, "", 3]);
		}).toThrow(adjuster.CAUSE.EACH_EMPTY);

		expect(() =>
		{
			adjuster.array().each(adjuster.number().default(999))
				.adjust([1, null, 3]);
		}).toThrow(adjuster.CAUSE.EACH_NULL);
		expect(() =>
		{
			adjuster.array().each(adjuster.number().default(999))
				.adjust([1, "", 3]);
		}).toThrow(adjuster.CAUSE.EACH_EMPTY);

		expect(() =>
		{
			adjuster.array().each(adjuster.number().acceptNull(999))
				.adjust([1, undefined, 3]);
		}).toThrow(adjuster.CAUSE.EACH_REQUIRED);
		expect(() =>
		{
			adjuster.array().each(adjuster.number().acceptNull(999))
				.adjust([1, "", 3]);
		}).toThrow(adjuster.CAUSE.EACH_EMPTY);

		expect(() =>
		{
			adjuster.array().each(adjuster.number().acceptEmptyString(999))
				.adjust([1, undefined, 3]);
		}).toThrow(adjuster.CAUSE.EACH_REQUIRED);
		expect(() =>
		{
			adjuster.array().each(adjuster.number().acceptEmptyString(999))
				.adjust([1, null, 3]);
		}).toThrow(adjuster.CAUSE.EACH_NULL);

		expect(() =>
		{
			adjuster.array().each(adjuster.number())
				.adjust(["1e+2", "0x100", "0o100", "0b100"]);
		}).toThrow(adjuster.CAUSE.EACH_TYPE);

		expect(() =>
		{
			adjuster.array().each(adjuster.number().integer())
				.adjust([3.14]);
		}).toThrow(adjuster.CAUSE.EACH_TYPE);

		expect(() =>
		{
			adjuster.array().each(adjuster.number().only(1, 2, 3))
				.adjust([0, 1, 2]);
		}).toThrow(adjuster.CAUSE.EACH_ONLY);

		expect(() =>
		{
			adjuster.array().each(adjuster.number().minValue(10))
				.adjust([9, 10, 11]);
		}).toThrow(adjuster.CAUSE.EACH_MIN_VALUE);
		expect(() =>
		{
			adjuster.array().each(adjuster.number().maxValue(10))
				.adjust([9, 10, 11]);
		}).toThrow(adjuster.CAUSE.EACH_MAX_VALUE);
	});
}

/**
 * array of string
 * @return {void}
 */
function testString()
{
	it("should be OK", () =>
	{
		expect(adjuster.array().each(adjuster.string().only("a", "b", "c"))
			.adjust(["a", "b", "c"])).toEqual(["a", "b", "c"]);

		expect(adjuster.array().each(adjuster.string().minLength(3))
			.adjust(["abc", "xyz"])).toEqual(["abc", "xyz"]);

		expect(adjuster.array().each(adjuster.string().maxLength(3))
			.adjust(["abc", "xyz"])).toEqual(["abc", "xyz"]);
		expect(adjuster.array().each(adjuster.string().maxLength(3, true))
			.adjust(["abc", "xyz"])).toEqual(["abc", "xyz"]);

		expect(adjuster.array().each(adjuster.string().pattern(/^Go+gle$/))
			.adjust(["Gogle", "Google", "Gooogle"])).toEqual(["Gogle", "Google", "Gooogle"]);
	});
	it("should be adjusted", () =>
	{
		expect(adjuster.array().each(adjuster.string())
			.adjust([false, true, 2, "+3", "-4"])).toEqual(["false", "true", "2", "+3", "-4"]);

		expect(adjuster.array().each(adjuster.string().trim())
			.adjust([" a", "b\t", "\rc\n"])).toEqual(["a", "b", "c"]);

		expect(adjuster.array().each(adjuster.string().only("a", "b", "c"))
			.adjust(["a", "b", "c"])).toEqual(["a", "b", "c"]);

		expect(adjuster.array().each(adjuster.string().maxLength(3, true))
			.adjust(["abcd", "xyz0"])).toEqual(["abc", "xyz"]);
	});
	it("should cause error(s)", () =>
	{
		expect(() =>
		{
			adjuster.array().each(adjuster.string().only("a", "b", "c"))
				.adjust(["a", "b", "x"]);
		}).toThrow(adjuster.CAUSE.EACH_ONLY);

		expect(() =>
		{
			adjuster.array().each(adjuster.string().minLength(3))
				.adjust(["ab", "xy"]);
		}).toThrow(adjuster.CAUSE.EACH_MIN_LENGTH);

		expect(() =>
		{
			adjuster.array().each(adjuster.string().maxLength(3))
				.adjust(["abcd", "xyz0"]);
		}).toThrow(adjuster.CAUSE.EACH_MAX_LENGTH);

		expect(() =>
		{
			adjuster.array().each(adjuster.string().pattern(/^Go+gle$/))
				.adjust(["google", "Ggle"]);
		}).toThrow(adjuster.CAUSE.EACH_PATTERN);
	});
}