import {CAUSE} from "libs/constants";
import NumberAdjuster from "libs/NumberAdjuster";

{
	describe("type", testType);
	describe("required", testRequired);
	describe("default", testDefault);
	describe("empty", testEmpty);
	describe("allowEmpty", testAllowEmpty);
	describe("in", testIn);
	describe("minValue", testMinValue);
	describe("minValue (adjusted)", testMinValueAdjusted);
	describe("maxValue", testMaxValue);
	describe("maxValue (adjusted)", testMaxValueAdjusted);
}

function testType()
{
	const objNumberAdjuster = new NumberAdjuster();
	it("should be OK", () =>
	{
		expect(objNumberAdjuster.adjust(1)).toEqual(1);
	});
	it("should be adjusted", () =>
	{
		expect(objNumberAdjuster.adjust("123")).toEqual(123);
		expect(objNumberAdjuster.adjust("+456")).toEqual(456);
		expect(objNumberAdjuster.adjust("-789")).toEqual(-789);
	});
	it("should cause error(s)", () =>
	{
		expect(() =>
		{
			objNumberAdjuster.adjust("abc")
		}).toThrow(CAUSE.TYPE);
	});
}

function testRequired()
{
	const objNumberAdjuster = new NumberAdjuster();
	it("should be OK", () =>
	{
		expect(objNumberAdjuster.adjust(0)).toEqual(0);
	});
	it("should cause error(s)", () =>
	{
		expect(() =>
		{
			objNumberAdjuster.adjust(undefined)
		}).toThrow(CAUSE.REQUIRED);
	});
}

function testDefault()
{
	const objNumberAdjuster = new NumberAdjuster().default(10);
	it("should be OK", () =>
	{
		expect(objNumberAdjuster.adjust(1)).toEqual(1);
	});
	it("should be adjusted", () =>
	{
		expect(objNumberAdjuster.adjust(undefined)).toEqual(10);
	});
}

function testEmpty()
{
	const objNumberAdjuster = new NumberAdjuster();
	it("should cause error(s)", () =>
	{
		expect(() =>
		{
			objNumberAdjuster.adjust("");
		}).toThrow(CAUSE.EMPTY);
	});
}

function testAllowEmpty()
{
	const objNumberAdjuster = new NumberAdjuster().allowEmpty();
	it("should be adjusted", () =>
	{
		expect(objNumberAdjuster.adjust("")).toEqual(0);
	});
}

function testIn()
{
	const objNumberAdjuster = new NumberAdjuster().in(1, 3, 5);
	it("should be OK", () =>
	{
		expect(objNumberAdjuster.adjust(1)).toEqual(1);
		expect(objNumberAdjuster.adjust(3)).toEqual(3);
		expect(objNumberAdjuster.adjust(5)).toEqual(5);
	});
	it("should cause error(s)", () =>
	{
		expect(() =>
		{
			objNumberAdjuster.adjust(2);
		}).toThrow(CAUSE.IN);
	});
}

function testMinValue()
{
	const objNumberAdjuster = new NumberAdjuster().minValue(10);
	it("should be OK", () =>
	{
		expect(objNumberAdjuster.adjust(10)).toEqual(10);
	});
	it("should cause error(s)", () =>
	{
		expect(() =>
		{
			objNumberAdjuster.adjust(9);
		}).toThrow(CAUSE.MIN_VALUE);
	});
}

function testMinValueAdjusted()
{
	const objNumberAdjuster = new NumberAdjuster().minValue(10, true);
	it("should be adjusted", () =>
	{
		expect(objNumberAdjuster.adjust(9)).toEqual(10);
	});
}

function testMaxValue()
{
	const objNumberAdjuster = new NumberAdjuster().maxValue(100);
	it("should be OK", () =>
	{
		expect(objNumberAdjuster.adjust(100)).toEqual(100);
	});
	it("should cause error(s)", () =>
	{
		expect(() =>
		{
			objNumberAdjuster.adjust(101);
		}).toThrow(CAUSE.MAX_VALUE);
	});
}

function testMaxValueAdjusted()
{
	const objNunmberAdjuster = new NumberAdjuster().maxValue(100, true);
	it("should be adjusted", () =>
	{
		expect(objNunmberAdjuster.adjust(101)).toEqual(100);
	});
}
