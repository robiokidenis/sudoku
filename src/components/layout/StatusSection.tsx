import React from 'react';
import { Difficulty } from '../Difficulty';
import { Timer } from '../Timer';
import { Numbers } from '../Numbers';
import { Action } from '../Action';
import { Mode } from '../Mode';

type StatusSectionProps = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  onClickNumber: (number: string) => void,
  onClickUndo: () => void,
  onClickErase: () => void,
  onClickHint: () => void,
  onClickMistakesMode: () => void,
  onClickFastMode: () => void,
  onClickPause: () => void
};

/**
 * React component for the Status Section.
 */
export const StatusSection = (props: StatusSectionProps) => {
  return (
    <section className="status">
    {/* <a onClick={props.onClickPause} className="btn btn-primary" href="#" role="button">Pause</a> */}

      <Difficulty onChange={props.onChange} />
      <Timer />
      <Numbers onClickNumber={(number) => props.onClickNumber(number)} />
      <div className="status__actions">
        <Action action='undo' onClickAction={props.onClickUndo} />
        <Action action='erase' onClickAction={props.onClickErase} />
        <Action action='hint' onClickAction={props.onClickHint} />
        <Mode mode='mistakes' onClickMode={props.onClickMistakesMode} />
        <Mode mode='fast' onClickMode={props.onClickFastMode} />
      </div>
    </section>
  )
}
