import vs from "value-schema";

{
	describe("type", testType);
}

/**
 * type
 */
function testType(): void
{
	it("should be OK", () =>
	{
		// two schemas
		expect(vs.union(vs.number(), vs.string()).applyTo(1)).toEqual(1);
		expect(vs.union(vs.number(), vs.string()).applyTo("a")).toEqual("a");

		// three schemas
		expect(vs.union(vs.boolean(), vs.number(), vs.string()).applyTo(true)).toEqual(true);
		expect(vs.union(vs.boolean(), vs.number(), vs.string()).applyTo(1)).toEqual(true);

		// email or username
		expect(vs.union(vs.email(), vs.string({pattern: /^\w+$/})).applyTo("user@example.com")).toEqual("user@example.com");
		expect(vs.union(vs.email(), vs.string({pattern: /^\w+$/})).applyTo("username")).toEqual("username");
	});
	it("should be adjusted", () =>
	{
		// two schemas
		expect(vs.union(vs.number(), vs.string()).applyTo("1")).toEqual(1);
		expect(vs.union(vs.string(), vs.number()).applyTo(1)).toEqual("1");

		// three schemas
		expect(vs.union(vs.number(), vs.boolean(), vs.string()).applyTo(true)).toEqual(1);
	});
	it("should cause error(s)", () =>
	{
		expect(() =>
		{
			vs.union(vs.number(), vs.string()).applyTo({});
		}).toThrow(vs.CAUSE.UNION);

		// email or username
		expect(() =>
		{
			vs.union(vs.email(), vs.string({pattern: /^\w+$/})).applyTo("!abcxyz");
		}).toThrow(vs.CAUSE.UNION);
	});
}
