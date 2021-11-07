import cuid from "cuid";
import React, { FC, useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { event } from "../../../app/api/data";
import { currency, nif } from "../../../utills/helper";
import InputMask from "react-input-mask";
interface EventFormProps {
  setFormOpen: (action: boolean) => void;
  handleCreateEvent: (e: any) => void;
  selectedEvent: typeof event;
}

const EventForm: FC<EventFormProps> = ({
  setFormOpen,
  handleCreateEvent,
  selectedEvent,
}) => {
  const initialValue = selectedEvent ?? {
    id: "",
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
    hostedBy: "",
    attendees: [],
  };
  const [values, setValues] = useState(initialValue);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <Segment clearing>
      <Header content="Create new event" />
      <Form
        onSubmit={() => {
          console.log(values);
          console.log(
            parseFloat(
              values.category
                .replace(".", "")
                .replace(" ", "")
                .replace(",", ".")
            )
          );
          // setValues({...values, id: cuid(), hostedBy: "Bob", attendees: []})
          // handleCreateEvent(values)
          // setFormOpen(false)
        }}
      >
        <InputMask
          mask={"9,99"}
          value={values.title}
          onChange={handleChange}
          alwaysShowMask={false}
        >
          {() => (
            <Form.Field>
              <input
                type="text"
                placeholder="Event Title"
                name="title"

                // onChange={(e) => handleChange(nif(e))}
              />
            </Form.Field>
          )}
        </InputMask>
        <Form.Field>
          <input
            type="text"
            placeholder="Category"
            name="category"
            value={values.category}
            onChange={(e) => handleChange(currency(e))}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={values.description}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="City"
            name="city"
            value={values.city}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Venue"
            name="venue"
            value={values.venue}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="date"
            placeholder="Date"
            name="date"
            value={values.date}
            onChange={handleChange}
          />
        </Form.Field>
        <Button type="submit" floated="right" positive content="Submit" />
        <Button
          type="submit"
          floated="right"
          content="Cancel"
          onClick={() => setFormOpen(false)}
        />
      </Form>
    </Segment>
  );
};

export default EventForm;
