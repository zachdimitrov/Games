using UnityEngine;

public class startupRotate : MonoBehaviour {
    public float rotate = 50f;

	// Update is called once per frame
	void Update () {
        transform.Rotate(Vector3.forward, rotate * Time.deltaTime);
	}
}
