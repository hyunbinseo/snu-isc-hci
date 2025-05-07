import { parse as parseCsv } from '@std/csv/parse';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import {
	array,
	digits,
	email,
	object,
	optional,
	parse,
	pipe,
	string,
	transform,
	url,
} from 'valibot';

const csv = readFileSync(join(import.meta.dirname, 'mail.csv'), 'utf-8');

const EmailSchema = object({
	'#': pipe(string(), digits(), transform(Number)),
	'날짜': string(),
	'발신자 이름': string(),
	'발신자 이메일': pipe(string(), email()),
	'제목': string(),
	'본문 텍스트': string(),
	'이미지 URL': pipe(
		optional(
			pipe(
				string(),
				transform((v) => v.split(', ')),
				array(pipe(string(), url())),
			),
		),
		transform((v) => v ?? []),
	),
});

const emails = parse(array(EmailSchema), parseCsv(csv, { skipFirstRow: true }));
