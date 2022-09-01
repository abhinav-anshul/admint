import Card from '@mui/material/Card';
import styles from './cardstepper.module.scss';
type CardStepperProps = {
  step: string;
  title: string;
};

function CardStepper({ step, title }: CardStepperProps) {
  return (
    <Card
      sx={{
        width: 200,
        minWidth: 200,
        height: 210,
        borderRadius: 5,
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px',
        backgroundColor: '#005FBB',
        color: '#ffffff',
        position: 'relative',
      }}
    >
      {/* eslint-disable-next-line no-constant-condition */}
      {true ? (
        <div className={styles.tag_container}>
          <div className={styles.tag}>Ongoing</div>
        </div>
      ) : null}

      <div
        style={{
          padding: '15px',
          bottom: 0,
          position: 'absolute',
        }}
      >
        <div style={{ fontWeight: 700, fontSize: '1.6rem' }}>Step: {step}</div>
        <div>
          <hr className={styles.hr} />
        </div>
        <div style={{ fontSize: '24px', fontWeight: 500, lineHeight: '29px' }}>
          {title}
        </div>
      </div>
    </Card>
  );
}

export default CardStepper;
