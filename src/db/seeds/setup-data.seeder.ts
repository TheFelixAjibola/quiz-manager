import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { quizSampleData } from '../data/quiz.data';
import { DataSource } from 'typeorm';
import { Quiz } from 'src/modules/quiz/entities/quiz.entity';
import { Question } from 'src/modules/quiz/entities/question.entity';
import { Option } from 'src/modules/quiz/entities/option.entity';

export class SetupData implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    await dataSource.query('SET foreign_key_checks = 0');
    await dataSource.query('TRUNCATE TABLE `quizes`;');
    await dataSource.query('TRUNCATE TABLE `questions`;');
    await dataSource.query('TRUNCATE TABLE `options`;');
    await dataSource.query('SET foreign_key_checks = 1');

    for (let i = 0; i < quizSampleData.length; i++) {
      const { quizTitle, quizDescription, questions } = quizSampleData[i];

      const quiz = new Quiz();

      quiz.title = quizTitle;
      quiz.description = quizDescription;

      await quiz.save();

      for (let j = 0; j < questions.length; j++) {
        const { question, options } = questions[j];
        const que = new Question();
        que.question = question;
        que.quiz = quiz;

        await que.save();

        for (let k = 0; k < options.length; k++) {
          const { text, isCorrect } = options[k];

          const opt = new Option();

          opt.text = text;
          opt.isCorrect = isCorrect;
          opt.question = que;

          await opt.save();
        }
      }
    }
  }
}
